import { FaCloudSun } from "react-icons/fa";
import { CgSmileSad } from "react-icons/cg";
const Modal = () => {
  return (
    <>
      <dialog id="my_modal_3" className="modal bg-white/50 backdrop-blur-sm">
        <div className="modal-box shadow-none bg-blue-500 text-white rounded-lg py-12">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="text-center">
            <h3 className="font-medium text-3xl">
              Daily consultation Session Time
            </h3>
            <p className="flex gap-2 justify-center items-center my-4 font-medium text-lg">
              <FaCloudSun /> 10:00am - 8:00pm
            </p>
            <p className="text-yellow-300 flex gap-2 justify-center items-center">
              Note: There is no consultation session in this time!{" "}
              <CgSmileSad  className="text-2xl"/>
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
