const loginController = {
  async login(req, res, next) {
    res.json({ status: "Hello Login" });
  },
};

export default loginController;
