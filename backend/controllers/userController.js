import expressAsyncHandler from 'express-async-handler';

export const registerUser = expressAsyncHandler(async (req, res) => {
  console.log(req.body);
  res.send({ status: 'success' });
});

export const getUsers = expressAsyncHandler(async (req, res) => {});
