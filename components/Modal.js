// import { Dialog, Transition } from '@headlessui/react'
// import { Fragment, useState } from 'react'

// export default function MyModal({ selectedImg, Open }) {
//   let [isOpen, setIsOpen] = useState(true)
//   selectedImg && setIsOpen(Open)

//   function closeModal() {
//     setIsOpen(false)
//   }

//   function openModal() {
//     setIsOpen(true)
//   }

//   return (
//     <>
//       {/* <div className="fixed inset-0 flex items-center justify-center">
//         <button
//           type="button"
//           onClick={openModal}
//           className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
//         >
//           Open dialog
//         </button>
//       </div> */}

//       <Transition appear show={isOpen} as={Fragment}>
//         <Dialog
//           as="div"
//           className="fixed inset-0 z-10 overflow-y-auto"
//           onClose={closeModal}
//         >
//           <div className="min-h-screen px-4 text-center">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <Dialog.Overlay className="fixed inset-0" />
//             </Transition.Child>

//             {/* This element is to trick the browser into centering the modal contents. */}
//             <span
//               className="inline-block h-screen align-middle"
//               aria-hidden="true"
//             >
//               &#8203;
//             </span>
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 scale-95"
//               enterTo="opacity-100 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 scale-100"
//               leaveTo="opacity-0 scale-95"
//             >
//               <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
//                 <img
//                   src={selectedImg}
//                   alt="preview pic"
//                   className="h-full w-full"
//                 />
//                 {/* <Dialog.Title
//                   as="h3"
//                   className="text-lg font-medium leading-6 text-gray-900"
//                 >
//                   Payment successful
//                 </Dialog.Title>
//                 <div className="mt-2">
//                   <p className="text-sm text-gray-500">
//                     Your payment has been successfully submitted. We’ve sent you
//                     an email with all of the details of your order.
//                   </p>
//                 </div>

//                 <div className="mt-4">
//                   <button
//                     type="button"
//                     className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//                     onClick={closeModal}
//                   >
//                     Got it, thanks!
//                   </button>
//                 </div> */}
//               </div>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition>
//     </>
//   )
// }

const Modal = ({ selectedImg, setSelectedImg }) => {
  return (
    <div
      className="fixed top-0 left-0 flex  min-h-screen w-full  justify-center  bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target.src) {
          return
        } else {
          setSelectedImg(null)
        }
      }}
    >
      <img
        src={selectedImg}
        alt="preview pic"
        className="h-5/12 absolute top-20  block w-7/12 border-2 border-stone-400 shadow-xl"
      />
    </div>
  )
}

export default Modal
