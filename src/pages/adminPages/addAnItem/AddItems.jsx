import { FaUtensils } from "react-icons/fa";
import DashboardContainer from "../../../components/dashboardContainer/DashboardContainer";
import { useForm } from "react-hook-form";
import usePublicAPI from "../../../hooks/usePublicAPI";
import Swal from "sweetalert2";
import useSecureAPI from "../../../hooks/useSecureAPI";

const AddItems = () => {
  const IMG_API_LINK = import.meta.env.VITE_IMG_API;
  const publicAPI = usePublicAPI();
  const secureAPI = useSecureAPI();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (item) => {
    const imageFile = { image: item.image[0] };
    try {
      const { data } = await publicAPI.post(IMG_API_LINK, imageFile, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      item.image = data.data.display_url;
      item.price = parseFloat(item.price);
      const res = await secureAPI.post("/menu", item);
      if (res.data.insertedId) {
        reset();
        Swal.fire({
          title: `${item.name} added successfully`,
          icon: "success",
          showConfirmButton: false,
          position: "center",
          timer: 2000,
        });
      } else
        Swal.fire({
          title: "Error adding item",
          icon: "error",
        });
    } catch (error) {
      Swal.fire({
        title: error.message,
        icon: "error",
      });
    }
  };

  return (
    <DashboardContainer
      className="bg-white"
      title="Add an Item"
      subTitle="What's new?"
    >
      <section className="max-w-[1000px] mx-auto bg-[#F3F3F3] p-5 lg:p-10 mt-10 normal-case">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block">
            <label className="block">
              Recipe Name <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full p-3 mt-2 rounded border-none outline-none"
              type="text"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-error inline-block mt-1">
                Recipe name is required
              </span>
            )}
          </label>

          <label className="mt-4 flex flex-col md:flex-row gap-3">
            <label className="flex-1">
              <label className="block">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                className="select select-ghost w-full bg-white mt-2 focus:outline-none focus:border-none"
                {...register("category", { required: true })}
              >
                <option className="hidden" value="">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
              {errors.category && (
                <span className="text-error inline-block mt-1">
                  Category is required
                </span>
              )}
            </label>

            <label className="flex-1 mt-4 md:mt-0">
              <label className="block">
                Price <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full p-3 mt-2 rounded border-none outline-none"
                type="number"
                {...register("price", { required: true, min: 1 })}
              />
              {errors.price?.type === "required" && (
                <span className="text-error inline-block mt-1">
                  Price is required
                </span>
              )}
              {errors.price?.type === "min" && (
                <span className="text-error inline-block mt-1">
                  Price must be at least 01
                </span>
              )}
            </label>
          </label>

          <label className="block mt-4">
            <label className="block">
              Recipe Details <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full min-h-52 max-h-72 p-3 mt-2 rounded border-none outline-none"
              type="text"
              {...register("recipe", { required: true })}
            />
            {errors.recipe && (
              <span className="text-error inline-block mt-1">
                Recipe details are required
              </span>
            )}
          </label>

          <label className="block mt-4">
            <input type="file" {...register("image", { required: true })} />
            {errors.image && (
              <span className="block text-error mt-1">Image is required</span>
            )}
          </label>

          <button className="flex items-center gap-x-2 py-3 px-5 rounded-lg bg-primaryColor hover:bg-primaryColor/80 text-white  mt-5 active:scale-95 active:translate-y-1">
            Add Item <FaUtensils />
          </button>
        </form>
      </section>
    </DashboardContainer>
  );
};

export default AddItems;
