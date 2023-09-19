import AppController from "../controlllers/AppController";
import StudentsController from "../controlllers/StudentsController";


const mapRoutes = (app) => {
    app.get('/', AppController.getHomepage);
    app.get('/students', StudentsController.getAllStudents);
    app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
module.exports = mapRoutes;