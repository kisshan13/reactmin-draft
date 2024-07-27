import ApiManager from "../../package/api/manager";

const userApiManager = new ApiManager("user");

userApiManager.registerApi({
  find: async (data) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const d = await res.json();

    return {
      data: d,
      metadata: {
        page: 1,
        totalPage: 1,
        size: 10,
        totalItems: 10,
      },
    };
  },
  findOne: async (data) => data,
  create: async (data) => data,
  del: async (data) => data,
  update: async (data) => data,
});

export default userApiManager;
