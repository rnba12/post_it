const { init } = require("../dbConfig");
const { ObjectId } = require("mongodb");
const dayjs = require("dayjs");

class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.author = data.author;
    this.story = data.story;
    this.date = dayjs().format("MMMM DD, YYYY");
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        const postsData = await db.collection("posts").find().toArray();
        const posts = postsData.map((p) => new Post({ ...p, id: p._id }));
        resolve(posts);
      } catch (err) {
        console.log(err);
        reject("Could not get posts");
      }
    });
  }

  static findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        let postsData = await db
          .collection("posts")
          .find({ _id: ObjectId(id) })
          .toArray();
        console.log(postsData);
        let post = new Post({ ...postsData[0], id: postsData[0]._id });
        resolve(post);
      } catch (err) {
        console.log(err);
        reject("Post not found");
      }
    });
  }

  static create(body) {
    return new Promise(async (resolve, reject) => {
      try {
        const { title, author, story } = body;
        console.log(title, author, story);
        const db = await init();
        let postsData = await db.collection("posts").insertOne(body);
        console.log(postsData.insertedId);
        let newPost = new Post({ ...body, id: postsData.insertedId });
        resolve(newPost);
      } catch (err) {
        console.log(err);
        reject("Error creating post");
      }
    });
  }
}

module.exports = Post;
