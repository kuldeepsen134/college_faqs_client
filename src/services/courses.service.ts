import axios from "axios";

export const fetchCourses = async () => {
  try {
    const res = await axios.get(
      "http://ec2-52-90-193-2.compute-1.amazonaws.com:4000/user/college/all"
    );
    return res.data;
  } catch (error) {
    throw error;
  }
};
