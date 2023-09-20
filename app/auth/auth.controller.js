//@descr Auth User
//@route POST/api/auth/login
//@access Public

export const authUser = async (req, res) => {
  res.json({ message: "You are authenticated" });
}