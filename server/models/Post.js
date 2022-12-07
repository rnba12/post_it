const { init } = require("../dbConfig");
const { ObjectId } = require("mongodb");

class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.story = data.story;
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
        const { title, name, story } = body;
        console.log(title, name, story);
        const db = await init();
        let postsData = await db
          .collection("posts")
          .insertOne({ title, name, story });
        console.log(postsData);
        let newPost = new Post(postsData.ops[0]);
        resolve(newPost);
      } catch (err) {
        reject("Error creating post");
      }
    });
  }
}

module.exports = Post;
