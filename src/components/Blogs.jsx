import React, { useState } from "react";
import { blogContent } from "../hooks/blogs";


function Blogs() {
  const [showArrow, setShowArrow] = useState(false);
  const [filteredItems, setFilteredItems] =useState(blogContent)
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedAuthor, setSelectedAuthor] = useState("all");





const handleFilter = (event) => {
  const selectedValue = event.target.value;
  setSelectedCategory(selectedValue);

  if (selectedValue === "all") {
    setFilteredItems(blogContent);
  } else if (selectedValue === "Web stranice") {
    const filteredItems = blogContent.filter(item => item.category.includes('Web stranice'));
    
    setFilteredItems(filteredItems);
  }
 else if (selectedValue === "Marketing") {
  const filteredItems = blogContent.filter(item => item.category.includes('Marketing, '));
  
  setFilteredItems(filteredItems);
  
}
};

const handleFilterAuthor = (e) => {
  const selectedValue = e.target.value;
  setSelectedAuthor(selectedValue);
  if (selectedValue === "Svi") {
    setFilteredItems(blogContent);
  } else if (selectedValue === "Jon Doe1") {
    const filteredItems = blogContent.filter((item) => item.author === 'Jon Doe1');
    setFilteredItems(filteredItems);
  } else if (selectedValue === "Jon Doe2") {
    const filteredItems = blogContent.filter((item) => item.author === 'Jon Doe2');
    setFilteredItems(filteredItems);
  }
};

console.log(blogContent)





  return (
    <div className="relative">



  
      <div className='mx-2'>

  
<div className='mt-56 flex items-end gap-5 justify-between mr-40 py-2'>
<section className="pl-[60px] pt-[250px] md:pt-[250px]  prose-2xl">
 
        <h1 className="text-gray-800 lg:text-7xl hidden md:block font font-bold pl-28 pb-10">Blog</h1>
        
      </section>
     
</div>




</div>
<div className="flex items-center gap-3 justify-end md:pr-40">
<p>Showing {filteredItems.length} of {blogContent.length}</p>
<select onChange={handleFilter}>
         <option value="all"
         >Kategorija</option>
          <option value="Web stranice"
          >Web</option>
          <option value="Marketing"
         >Marketing</option>
          
        
        </select>

        <select onChange={handleFilterAuthor}>
         <option value="Svi"
         >Autor</option>
          <option value="Jon Doe1"
          >Jon Doe1</option>
          <option value="Jon Doe2"
         >Jon Doe2</option>
          
        
        </select>
        </div>
      <div className="grid  md:pt-2 gap-y-20 md:mx-40 grid-cols-1 lg:grid-cols-2 py-20">
        
        {filteredItems.map((item) => (
          <div key={item.id} className="relative group">
            <div className="w-full overflow-hidden h-full">
            <a
                    href={`blog/${item.headline
                      .toLowerCase()
                      .replace(/\s/g, "-")
                      .replaceAll(",", "")
                      .replaceAll("ć", "c")
                      .replaceAll("š", "s")
                      .replaceAll("!", "")
                       .replaceAll("?", "")}`}
                  >    <img
                src={item.src}
                alt="images"
                className="w-full grayscale-[30%] rounded-lg transition-all duration-500 object-cover hover:scale-[114%]"
              />
</a>
              <div className="absolute bottom-10 space-y-5 px-8 text-white">
                <div className="flex gap-2">
                  <p className="text-xs shadow-sm md:text-base whitespace-nowrap text-red-600 font-bold">
                    {item.category}
                  </p>
                  <p className="text-xs md:text-base whitespace-nowrap">
                    {item.time} minuta čitanja
                  </p>
                </div>
                <div>
                  <h2 className="font-bold sm:text-lg 2xl:text-4xl">
                    {item.headline}
                  </h2>
                  <p>{item.par}</p>
                  <a
                    href={`blog/${item.headline
                      .toLowerCase()
                      .replace(/\s/g, "-")
                      .replaceAll(",", "")
                      .replaceAll("ć", "c")
                      .replaceAll("š", "s")
                      .replaceAll("!", "")
                       .replaceAll("?", "")}`}
                  >
                    <div
                      className="flex group items-center"
                      onMouseEnter={() => setShowArrow(true)}
                      onMouseLeave={() => setShowArrow(false)}
                    >
                      <span className="duration-500 hover:text-red-600 text-2xl">
                        Read More
                      </span>
                      <div className="flex "> 
                      <div
                        className={`text-5xl flex   ${
                          showArrow ? "" : "opacity-1"
                        }`}
                        style={{ clipPath: "inset(0 0 0 0)" }}
                      >
                        <div className="  w-2 transition ease-in-out group-hover:delay-300  -translate-x-10  group-hover:translate-x-0 ">
                          →
                        </div>
                        <div className=" w-10 transition ease-in-out delay-100 group-hover:delay-0s duration-300 group-hover:translate-x-10 group-hover:translate-y-0 ">
                          →
                        </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div
                className="opacity-0 py-5 pb-2 transition-all duration-500 absolute top-0 group-hover:translate-y-0 group-hover:opacity-100 w-full group-hover:bg-gradient-to-b from-gray-500 transparent gap-3 flex justify-start items-center pl-5"
              >
                <div className="flex justify-start items-center duration-500 group-hover:translate-y-2 py-1">
                  <img
                    src={item.authorPhoto}
                    alt="author1"
                    className="rounded-full w-1/4 max-w-xs"
                  />
                  <div className="ml-4 text-white">
                    <p>
                      Posted by <span className="font-bold">{item.author}</span>
                    </p>
                    <p>{item.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
