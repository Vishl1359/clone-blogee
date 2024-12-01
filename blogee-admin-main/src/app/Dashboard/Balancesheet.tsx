type UserData = {
    user_Name: string;
    post_conunts: number;
    post_views: number;
    toatal_sharers: number;
  };
  
  const Usercount: UserData[] = [
    { user_Name: 'Hritik', post_conunts: 68, post_views: 123, toatal_sharers:30},
    { user_Name: 'Amir', post_conunts: 79, post_views: 234, toatal_sharers: 20 },
  ];    

  
  const RecentCountUser = () => {
    return (
      <div className="mt-6 w-full  shadow-2xl rounded-2xl ">
        <h2 className=" mb-4 text-black font-bold text-2xl mr-4 ">Recent Post</h2>
        <div className="overflow-x-auto"> 
          <table className="w-full table-auto border-collapse border-2 ">
            <thead>
              <tr className="bg-gray-200 text-left text-xs sm:text-sm md:text-base text-black">
              <th className="p-2">  <input type="checkbox" /></th>

                <th className="p-2">User count</th>
                <th className="p-2">Post count</th>
                <th className="p-2">Post views</th>
                <th className="p-2">Total shares</th>
              </tr>
            </thead>
            <tbody>
              {Usercount.map((Userdata, index) => (
                <tr key={index} className="border-b hover:bg-gray-300 text-black">
                      <td className="p-2">
                  <input type="checkbox" />
                </td>
                  <td className="p-2 text-xs sm:text-sm md:text-base">{Userdata.user_Name}</td>
                  <td className="p-2 text-xs sm:text-sm md:text-base">{Userdata.post_conunts}</td>
                  <td className="p-2 text-xs sm:text-sm md:text-base">{Userdata.post_views}</td>
                  <td className="p-2 text-xs sm:text-sm md:text-base">{Userdata.toatal_sharers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default RecentCountUser;
  