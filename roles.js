const roles = {
    superadmin: ['viewAllUsers', 'manageUsers', 'manageCourse', 'viewProfile','createCourse','viewPosts'],
    admin: ['viewAllUsers', 'manageCourse', 'manageComments', 'viewProfile','createCourse','viewPosts'],
    user: ['viewPosts', 'viewProfile']
};

module.exports = roles;


