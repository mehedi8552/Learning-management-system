const roles = {
    superadmin: ['viewAllUsers', 'manageUsers', 'manageCourse', 'viewProfile','viewPosts'],
    admin: ['viewAllUsers', 'manageCourse', 'manageComments', 'viewProfile','viewPosts'],
    user: ['viewPosts', 'viewProfile']
};

module.exports = roles;


