import ApiManager from "../../package/data-api/manager";

const userApiManager = new ApiManager("user");

userApiManager.registerApi({
  find: (data) => data,
  findOne: (data) => data,
  create: (data) => data,
  del: (data) => data,
  update: (data) => data,
});

export default userApiManager;
