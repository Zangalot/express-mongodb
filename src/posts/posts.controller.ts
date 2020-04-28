import * as express from "express";
import Post from "./post.interface";
import postModel from "./posts.model";
import PostNotFoundException from "./../exceptions/PostNotFoundException";
import validationMiddleware from '../middleware/validation.middleware';
import CreatePostDto from './post.dto';
import authMiddleware from "./../middleware/auth.middleware";
import RequestWithUser from "./../interfaces/requestWithUser.interface";
import userModel from "./../users/user.model";

class PostsController {
  public path = "/posts";
  public router = express.Router();
  private post = postModel;
  private user = userModel;

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path, this.getAllPosts);
    this.router.get(`${this.path}/:id`, this.getPostById);

    this.router
      .all(`${this.path}/*`, authMiddleware)
      .patch(`${this.path}/:id`, validationMiddleware(CreatePostDto, true), this.modifyPost)
      .delete(`${this.path}/:id`, this.deletePost)
      .post(this.path, validationMiddleware(CreatePostDto), this.createPost);
  }

  getAllPosts = async (request: express.Request, response: express.Response) => {
    const posts = await this.post.find().populate('author', '-password');
    response.send(posts);
  };

  private createPost = async (request: RequestWithUser, response: express.Response) => {
    console.log(request.body);
    const postData: CreatePostDto = request.body;
    const createdPost = new this.post({
      ...postData,
      authors: [request.user._id],
    });
    const user = await this.user.findById(request.user._id);
    user.posts = [...user.posts, createdPost._id];
    await user.save();
    const savedPost = await createdPost.save();
    await savedPost.populate('author', 'name').execPopulate();
    response.send(savedPost);
  };
  getPostById = (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    this.post.findById(id).then((post) => {
      if (!post) {
        next(new PostNotFoundException(id));
      } else {
        response.send(post);
      }
    });
  };

  modifyPost = (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    const postData: Post = request.body;
    this.post.findByIdAndUpdate(id, postData, { new: true }).then((post) => {
        if (!post) {
            next(new PostNotFoundException(id));
        } else {
            response.send(post);
        }
    });
  };

  deletePost = (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const id = request.params.id;
    this.post.findByIdAndDelete(id).then((successResponse) => {
      if (successResponse) {
        response.send(200);
      } else {
        next(new PostNotFoundException(id));
      }
    });
  };
}

export default PostsController;
