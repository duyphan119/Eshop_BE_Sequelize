const db = require("../models");
const { getAllGroupCategoriesInclude } = require("../utils/includes");

const getAll = async (query) => {
  try {
    let { limit, p } = query;
    let items;
    if (!limit && !p) {
      items = await db.GroupCategory.findAll({
        nest: true,
        include: getAllGroupCategoriesInclude(),
      });

      return { status: 200, data: { items } };
    } else {
      limit = parseInt(limit);
      p = parseInt(p) - 1;

      items = await db.GroupCategory.findAll({
        nest: true,
        include: getAllGroupCategoriesInclude(),
        limit,
        offset: p,
      });
      const count = await db.GroupCategory.count();
      return {
        status: 200,
        data: {
          items,
          limit,
          totalResult: count,
          totalPage: Math.ceil(count / limit),
        },
      };
    }
  } catch (error) {
    console.log(error);
    return { status: 500, data: { message: `Something's wrong` } };
  }
};

module.exports = { getAll };
