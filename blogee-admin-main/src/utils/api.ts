export const login = async (
  email: string,
  password: string
): Promise<string | null> => {
  try {
    const response = await fetch("https://api-74opign4ma-uc.a.run.app/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.token; // Assuming the API returns a token in the response
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
};

interface PostData {
  title: string;
  description: string;
  post_type: string;
  category: string;
  source: string;
  image?:string;
}

export const createPost = async (
  formData: PostData,
  token: string
): Promise<void> => {
  try {
    const response = await fetch("https://app-74opign4ma-uc.a.run.app/api/post/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`, // Include the token in the Authorization header
      },
      body: JSON.stringify(formData),
    });
    const data = response.json();
    if (!response.ok) {
      throw new Error("Failed to create post");
    }

    // console.log("Post created successfully");
    alert("Post createed succesfully");
  } catch (error) {
    console.error("Create post error:", error);
  }
};

export const logout = async (token: string): Promise<string | null> => {
  try {
    const response = await fetch("http://localhost:3000/api/user/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data.token; // Assuming the API returns a token in the response
    } else {
      throw new Error("Logout failed");
    }
  } catch (error) {
    console.error("Logout error:", error);
    return null;
  }
};

interface Blogdata {
  title:string;
  subtitle:string;
  language:string;
  description:string;
  image:string|null;
  url:string;
  thumbnail:string;
  keywords:string;
}

export const CreateBlog=async(blogData:Blogdata,token:string):Promise<void>=>{
  try {
    console.log(token)
    const response = await fetch("https://api-74opign4ma-uc.a.run.app/api/admin/create_blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`, // Include the token in the Authorization header
      },
    
      body: JSON.stringify(blogData),
    });
    const data = response.json();
    
    if (!response.ok) {
      throw new Error("Failed to create blog");
    }

    // console.log("Post created successfully");
    alert("Blog createed succesfully");
    console.log(data,"asdf")
  } catch (error) {
    console.log("Create blog error:", error);
  }

}


