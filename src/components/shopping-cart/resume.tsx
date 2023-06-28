import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useApp from "../../context/useApp";
import { Modal } from "../modal";
import { useState } from "react";
import One from "../items/one";

export default function ResumeShoppingCart() {
  const { shoppingCart } = useApp();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        children={
          <div className="">
            <div className="font-pacific text-3xl">Cart</div>
            {shoppingCart.map((icecream: IceCream, index: number) => (
              <div key={index} className="my-2">
                <One icecream={icecream} />
              </div>
            ))}
          </div>
        }
      />
      <div className="fixed bottom-10 lg:w-1/3 md:w-1/2 w-11/12 px-14">
        <div className="rounded-full bg-pink-600 text-lg text-white p-2 cursor-pointer">
          <div className="flex justify-between items-center">
            <div
              className="w-full text-center ml-12 font-bold"
              onClick={() => shoppingCart.length && setModalIsOpen(true)}
            >
              <FontAwesomeIcon icon={faShoppingBasket} /> View order
            </div>
            <div className="bg-white flex rounded-full">
              <div className="w-12 h-12 text-center rounded-full text-black">
                <div className="mt-3 overflow-hidden text-base">
                  {shoppingCart.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
