const groupCategoryService = require("../services/groupCategory.service");

const controller = {
  getAll: async (req, res) => {
    const { data, status } = await groupCategoryService.getAll(req.query);
    res.status(status).json(data);
  },
};

module.exports = controller;
