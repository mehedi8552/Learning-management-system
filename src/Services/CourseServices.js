const Course = require("../Model/Course");



const createCourceService = async (req, res) => {
    try {
        const instructorID = req.params.instructorID
        const { title, description, modules } = req.body;
           
        const course = new Course({
          title,
          description,
          instructorID,
          modules
        });
      
          const newCourse = await course.save();

      return {
        status: "success",
        data: newCourse,
      };
    } catch (e) {
      return { status: "Faild", message: e.toString() };
    }
  };

  
  
  // Protected Route for viewing posts (only regular users)
//   app.get(
//     "/viewPosts",
//     authenticateToken,
//     authorizeRole("viewPosts"),
//     (req, res) => {
//       res.send("View Posts");
//     }
//   );

//   const LoginService = async (req, res) => {
//     try {
     
//       return {
//         status: "success",
//         data: "Login success! and Cookie has been set!",
//       };
//     } catch (e) {
//       return { status: "Faild", message: e.toString() };
//     }
//   };

module.exports = {
    createCourceService,
    //LoginService,
  };