const { init } = require("../dbConfig");
const { ObjectId } = require("mongodb");

class Post {
  constructor(data) {
    this.id = data.id;
    this.title = data.title;
    this.author = data.author;
    this.story = data.story;
    this.date = data.date;
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
        const db = await init();
        let postsData = await db.collection("posts").insertOne(body);
        let newPost = new Post({ ...body, id: postsData.insertedId });
        resolve(newPost);
      } catch (err) {
        reject("Error creating post");
      }
    });
  }

  update(body) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        let updatedPostData = await db.collection("posts").findOneAndUpdate(
          { _id: ObjectId(this.id) },
          {
            $set: {
              title: body.title,
              author: body.author,
              story: body.story,
            },
          }
        );
        console.log(updatedPostData.value._id);
        let updatedPost = new Post(updatedPostData.value);
        resolve(updatedPost);
      } catch (err) {
        reject("Error updating post");
      }
    });
  }
}

module.exports = Post;
