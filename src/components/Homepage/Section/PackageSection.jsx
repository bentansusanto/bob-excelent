import React, { useState } from "react";
import BgPackage from "../../../assets/bg-package.svg";
import Checklist from "../../../assets/checklist.svg";
import { listPackage } from "../../../Data/ListPackage";
import {IoClose} from 'react-icons/io5'

const PackageSection = ({ matches }) => {
    const [active, setActive] = useState({})
    const [open, setOpen] = useState(false)

    const handleActive = (idx) => {
        console.log(idx)
        setActive(idx)
        setOpen(!open)
    }

  return (
    <div className="mt-40">
      {matches ? (
        // Mobile View
        <div className="bg-orange-50 py-5">
          <h2 className="font-bold text-[18px] px-3">
            Mulai belajar sekarang dengan Bob's Prof Excelent
          </h2>
          <div className="mt-5 grid grid-cols-1 w-[18.5rem] mx-auto gap-10">
            {listPackage.map((val, idx) => (
              <div key={idx}>
                <div className="relative">
                  <img
                    src={BgPackage}
                    alt="bg-package"
                    className="rounded-t-2xl"
                  />
                  <div className="absolute inset-1 top-2 px-3">
                    <h4 className="font-bold text-[18px] text-white">
                      {val.title}
                    </h4>
                  </div>
                </div>
                <div className="relative -mt-6 z-20 bg-white p-3 rounded-2xl space-y-1">
                  <p className="font-semibold">{val.jenis_package}</p>
                  <p className="font-semibold">{val.launch_package}</p>
                  <div className="space-y-3 pt-3">
                    {val.fasilitas.slice(0, 3).map((fas) => (
                      <div key={fas} className="flex space-x-2 items-center">
                        <img src={Checklist} alt="checklist" className="w-4" />
                        <p>{fas}</p>
                      </div>
                    ))}
                  </div>
                  <div className="pt-6">
                     {/* Price */}
                    <div className="flex space-x-3">
                        {/* Diskon */}
                        <div className="bg-orange-100 rounded-md p-3">
                            <p className="font-semibold text-orange-500">Diskon 50%</p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex space-x-2">
                                <p className="line-through text-gray-400 text-[.8rem]">Rp900.000</p>
                                <p className="font-bold text-red-500">Rp450.000</p>
                            </div>
                            <p className="text-[.8rem] text-blue-500 font-semibold">Hanya Rp50.000/bulan</p>
                        </div>
                    </div>
                    {/* Button */}
                    <div className="flex justify-between pt-4">
                        <button onClick={() => handleActive(idx)} className={` ${active === idx ? "active" : ""} border-2 border-gray-300 font-medium px-5 py-2 rounded-full`}>Lihat Detail</button>
                        <button className="bg-orange-500 px-5 py-2 font-medium text-white rounded-full shadow-md">Beli Paket</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
                <div className={`${open ? "bg-black opacity-60" : "hidden"} fixed top-0 z-30 w-screen h-36`}/>
                  <div className={`${open ? "bg-white p-3 fixed top-36" : "hidden"}  w-full h-full z-30 `}>
                        <div>
                            <div className="flex space-x-5 justify-between items-center">
                                <h5 className="font-semibold">{listPackage[active]?.title}</h5>
                                <IoClose onClick={() => setOpen(false)} className="text-2xl"/>
                            </div>
                            <div className="mt-6 space-y-2 h-[27rem] py-1 overflow-y-scroll scroll-smooth">
                                <div>
                                    <p className="font-semibold text-[.9rem]">{listPackage[active]?.jenis_package}</p>
                                    <p className="font-semibold text-[.9rem]">{listPackage[active]?.launch_package}</p>
                                </div>
                                {
                                    listPackage[active]?.fasilitas.map((val, idx) => (
                                        <div key={idx} className="flex items-center space-x-2">
                                            <img src={Checklist} alt="check-list" className="w-4"/>
                                            <p className="text-[.9rem]">{val}</p>
                                        </div>
                                    ))
                                }
                                <div className="pt-3">
                                    <p className="font-semibold text-[.9rem]">{listPackage[active]?.jenis_package1}</p>
                                    <p className="font-semibold text-[.9rem]">{listPackage[active]?.launch_package}</p>
                                </div>
                                {
                                    listPackage[active]?.fasilitas1.map((val, idx) => (
                                        <div key={idx} className="flex items-center space-x-2">
                                            <img src={Checklist} alt="check-list" className="w-4"/>
                                            <p className="text-[.9rem]">{val}</p>
                                        </div>
                                    ))
                                }
                                <div className="pt-3">
                                    <p className="font-semibold text-[.9rem]">{listPackage[active]?.jenis_package2}</p>
                                    <p className="font-semibold text-[.9rem]">{listPackage[active]?.launch_package1}</p>
                                </div>
                                {
                                    listPackage[active]?.fasilitas2?.map((val, idx) => (
                                        <div key={idx} className="flex items-center space-x-2">
                                            <img src={Checklist} alt="check-list" className="w-4"/>
                                            <p className="text-[.9rem]">{val}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="mt-5">
                                <button className="bg-orange-500 py-2 w-full rounded-full font-semibold text-white shadow-md">Beli Paket</button>
                            </div>
                        </div>
                  </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PackageSection;
