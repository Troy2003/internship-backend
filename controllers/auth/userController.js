const userController = {
  async me(req, res, next) {
    res.json({ status: "user" });
  },
};

export default userController;
