import React from "react";
import { MenuMoreHorizontal } from "./MenuMoreHorizontal";
import { MoreHorizontal } from "./MoreHorizontal";
import { ProfileWithDetails } from "./ProfileWithDetails";

export const Message = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] h-[1024px] relative">
        <div className="absolute w-[1079px] h-[1326px] top-0 left-[361px]">
          <div className="absolute w-[481px] h-[1024px] top-0 left-[598px] bg-[#f0f6ff]">
            <div className="relative w-[322px] h-[200px] top-[412px] left-[82px]">
              <p className="absolute w-[318px] top-[61px] left-0 [font-family:'Inter-Italic',Helvetica] font-normal italic text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Choose from your existing conversations, start a new one, or just keep swimming.
              </p>
              <div className="absolute top-0 left-[19px] [font-family:'Inter-Black',Helvetica] font-black text-black text-[32px] tracking-[0] leading-[normal]">
                Select a message
              </div>
              <div className="absolute w-56 h-[59px] top-[142px] left-12">
                <div className="relative w-[222px] h-[59px] bg-[#255dd4] rounded-[93px]">
                  <div className="absolute top-[17px] left-[42px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                    New message
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[597px] h-[1171px] top-[155px] left-0 overflow-y-scroll">
            <div className="relative w-[598px] h-[1402px] top-2.5">
              <div className="absolute w-[603px] h-[1295px] top-0 left-0">
                <div className="absolute w-[594px] h-[1262px] top-0 left-1 bg-white" />
                <div className="absolute w-[600px] h-[107px] top-[223px] left-0.5">
                  <div className="relative w-[594px] h-[107px] bg-white">
                    <img className="absolute w-[68px] h-[68px] top-5 left-[21px]" alt="Ellipse" src="ellipse-17.svg" />
                    <div className="absolute top-8 left-[98px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                      Nonso
                    </div>
                    <p className="absolute top-14 left-[99px] [font-family:'Inter-ExtraBold_Italic',Helvetica] font-extrabold italic text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      why have you not done it, we are still...
                    </p>
                    <div className="top-[22px] left-[464px] absolute [font-family:'Inter-ExtraLight',Helvetica] font-extralight text-black text-sm tracking-[0] leading-[normal]">
                      16/03/2024
                    </div>
                    <MoreHorizontal className="!absolute !w-6 !h-6 !top-[19px] !left-[552px]" />
                  </div>
                </div>
                <div className="top-[330px] left-px absolute w-[601px] h-[107px]">
                  <div className="relative w-[595px] h-[107px] bg-white">
                    <img
                      className="absolute w-[68px] h-[68px] top-5 left-[21px]"
                      alt="Ellipse"
                      src="ellipse-17-2.svg"
                    />
                    <div className="top-8 left-[98px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-xl absolute text-black tracking-[0] leading-[normal] whitespace-nowrap">
                      Godwin
                    </div>
                    <div className="absolute top-14 left-[99px] [font-family:'Inter-ExtraBold_Italic',Helvetica] font-extrabold italic text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      Hmmm
                    </div>
                    <div className="top-[22px] left-[463px] absolute [font-family:'Inter-ExtraLight',Helvetica] font-extralight text-black text-sm tracking-[0] leading-[normal]">
                      16/03/2024
                    </div>
                    <MoreHorizontal className="!absolute !w-6 !h-6 !top-[19px] !left-[552px]" />
                  </div>
                </div>
                <div className="top-[438px] left-px absolute w-[601px] h-[107px]">
                  <div className="relative w-[595px] h-[107px] bg-white">
                    <img className="absolute w-[68px] h-[68px] top-5 left-[21px]" alt="Mask group" src="image.png" />
                    <div className="top-8 absolute left-[98px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                      John
                    </div>
                    <div className="absolute top-14 left-[99px] [font-family:'Inter-Italic',Helvetica] font-normal italic text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      For real?
                    </div>
                    <div className="top-[22px] left-[463px] absolute [font-family:'Inter-ExtraLight',Helvetica] font-extralight text-black text-sm tracking-[0] leading-[normal]">
                      16/03/2024
                    </div>
                    <MoreHorizontal className="!top-5 !left-[552px] !absolute !w-6 !h-6" />
                  </div>
                </div>
                <div className="top-[545px] left-px absolute w-[601px] h-[107px]">
                  <div className="relative w-[595px] h-[107px] bg-white">
                    <img
                      className="absolute w-[68px] h-[68px] top-[18px] left-[21px]"
                      alt="Mask group"
                      src="mask-group-2.png"
                    />
                    <div className="top-[30px] absolute left-[98px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                      Caleb
                    </div>
                    <div className="absolute top-[54px] left-[99px] [font-family:'Inter-Italic',Helvetica] font-normal italic text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      that’s a great deal
                    </div>
                    <div className="top-[22px] left-[463px] absolute [font-family:'Inter-ExtraLight',Helvetica] font-extralight text-black text-sm tracking-[0] leading-[normal]">
                      16/03/2024
                    </div>
                    <MoreHorizontal className="!top-5 !left-[552px] !absolute !w-6 !h-6" />
                  </div>
                </div>
                <div className="top-[652px] left-px absolute w-[601px] h-[107px]">
                  <div className="relative w-[595px] h-[107px] bg-white">
                    <img
                      className="absolute w-[68px] h-[68px] top-[18px] left-[21px]"
                      alt="Mask group"
                      src="mask-group-5.png"
                    />
                    <div className="top-[30px] absolute left-[98px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                      Caleb
                    </div>
                    <div className="absolute top-[54px] left-[99px] [font-family:'Inter-Italic',Helvetica] font-normal italic text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      that’s a great deal
                    </div>
                    <div className="top-[22px] left-[464px] absolute [font-family:'Inter-ExtraLight',Helvetica] font-extralight text-black text-sm tracking-[0] leading-[normal]">
                      16/03/2024
                    </div>
                    <MoreHorizontal className="!top-[19px] !left-[553px] !absolute !w-6 !h-6" />
                  </div>
                </div>
                <div className="top-[9px] left-0.5 absolute w-[601px] h-[107px]">
                  <div className="relative w-[595px] h-[107px] bg-white">
                    <img
                      className="absolute w-[68px] h-[68px] top-[18px] left-[21px]"
                      alt="Mask group"
                      src="mask-group-11.png"
                    />
                    <div className="top-[30px] absolute left-[98px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                      Caleb
                    </div>
                    <div className="absolute top-[54px] left-[99px] [font-family:'Inter-Italic',Helvetica] font-normal italic text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      that’s a great deal
                    </div>
                    <MoreHorizontal className="!absolute !w-6 !h-6 !top-[19px] !left-[552px]" />
                    <div className="top-[22px] left-[464px] absolute [font-family:'Inter-ExtraLight',Helvetica] font-extralight text-black text-sm tracking-[0] leading-[normal]">
                      16/03/2024
                    </div>
                  </div>
                </div>
                <div className="top-[116px] left-0 absolute w-[601px] h-[107px]">
                  <div className="relative w-[595px] h-[107px] bg-white">
                    <img
                      className="absolute w-[68px] h-[68px] top-[18px] left-[21px]"
                      alt="Mask group"
                      src="mask-group-10.png"
                    />
                    <div className="top-[30px] absolute left-[98px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                      Caleb
                    </div>
                    <div className="absolute top-[54px] left-[99px] [font-family:'Inter-Italic',Helvetica] font-normal italic text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      that’s a great deal
                    </div>
                    <div className="top-[22px] left-[464px] absolute [font-family:'Inter-ExtraLight',Helvetica] font-extralight text-black text-sm tracking-[0] leading-[normal]">
                      16/03/2024
                    </div>
                    <img
                      className="absolute w-5 h-5 top-[53px] left-60 object-cover"
                      alt="Smile emoji"
                      src="smile-emoji-1.png"
                    />
                    <MoreHorizontal className="!absolute !w-6 !h-6 !top-[19px] !left-[552px]" />
                  </div>
                </div>
                <div className="top-[759px] left-px absolute w-[601px] h-[107px]">
                  <div className="relative w-[595px] h-[107px] bg-white">
                    <img
                      className="absolute w-[68px] h-[68px] top-[18px] left-[21px]"
                      alt="Mask group"
                      src="mask-group-6.png"
                    />
                    <div className="top-[30px] absolute left-[98px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                      Caleb
                    </div>
                    <div className="absolute top-[54px] left-[99px] [font-family:'Inter-Italic',Helvetica] font-normal italic text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      that’s a great deal
                    </div>
                    <div className="top-[22px] left-[463px] absolute [font-family:'Inter-ExtraLight',Helvetica] font-extralight text-black text-sm tracking-[0] leading-[normal]">
                      16/03/2024
                    </div>
                    <MoreHorizontal className="!absolute !w-6 !h-6 !top-[19px] !left-[552px]" />
                  </div>
                </div>
                <div className="top-[866px] left-0.5 absolute w-[601px] h-[107px]">
                  <div className="relative w-[595px] h-[107px] bg-white">
                    <img
                      className="absolute w-[68px] h-[68px] top-[18px] left-[21px]"
                      alt="Mask group"
                      src="mask-group-7.png"
                    />
                    <div className="top-[30px] absolute left-[98px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                      Caleb
                    </div>
                    <div className="absolute top-[54px] left-[99px] [font-family:'Inter-Italic',Helvetica] font-normal italic text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      that’s a great deal
                    </div>
                    <div className="top-[22px] left-[464px] absolute [font-family:'Inter-ExtraLight',Helvetica] font-extralight text-black text-sm tracking-[0] leading-[normal]">
                      16/03/2024
                    </div>
                    <MenuMoreHorizontal />
                  </div>
                </div>
                <div className="top-[973px] left-0.5 absolute w-[601px] h-[107px]">
                  <div className="relative w-[595px] h-[107px] bg-white">
                    <img
                      className="absolute w-[68px] h-[68px] top-[18px] left-[21px]"
                      alt="Mask group"
                      src="mask-group-8.png"
                    />
                    <div className="top-[30px] absolute left-[98px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                      Caleb
                    </div>
                    <div className="absolute top-[54px] left-[99px] [font-family:'Inter-Italic',Helvetica] font-normal italic text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      that’s a great deal
                    </div>
                    <div className="top-[22px] left-[464px] absolute [font-family:'Inter-ExtraLight',Helvetica] font-extralight text-black text-sm tracking-[0] leading-[normal]">
                      16/03/2024
                    </div>
                    <MenuMoreHorizontal />
                  </div>
                </div>
                <div className="top-[1080px] left-0.5 absolute w-[601px] h-[107px]">
                  <div className="relative w-[595px] h-[107px] bg-white">
                    <img
                      className="absolute w-[68px] h-[68px] top-[18px] left-[21px]"
                      alt="Mask group"
                      src="mask-group-9.png"
                    />
                    <div className="top-[30px] absolute left-[98px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                      Caleb
                    </div>
                    <div className="absolute top-[54px] left-[99px] [font-family:'Inter-Italic',Helvetica] font-normal italic text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      that’s a great deal
                    </div>
                    <div className="absolute w-6 h-[25px] top-[19px] left-[552px]">
                      <MenuMoreHorizontal />
                      <MenuMoreHorizontal />
                    </div>
                    <div className="top-[22px] left-[464px] absolute [font-family:'Inter-ExtraLight',Helvetica] font-extralight text-black text-sm tracking-[0] leading-[normal]">
                      16/03/2024
                    </div>
                  </div>
                </div>
                <div className="top-[1188px] left-0.5 absolute w-[601px] h-[107px]">
                  <div className="relative w-[595px] h-[107px] bg-white">
                    <img
                      className="absolute w-[68px] h-[68px] top-[18px] left-[21px]"
                      alt="Mask group"
                      src="mask-group-3.png"
                    />
                    <div className="top-[30px] absolute left-[98px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                      Caleb
                    </div>
                    <div className="absolute top-[54px] left-[99px] [font-family:'Inter-Italic',Helvetica] font-normal italic text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                      that’s a great deal
                    </div>
                    <div className="top-[39px] left-[464px] absolute [font-family:'Inter-ExtraLight',Helvetica] font-extralight text-black text-sm tracking-[0] leading-[normal]">
                      16/03/2024
                    </div>
                    <MenuMoreHorizontal />
                  </div>
                </div>
              </div>
              <div className="top-[1295px] left-0.5 absolute w-[601px] h-[107px]">
                <div className="relative w-[595px] h-[107px] bg-white">
                  <img
                    className="absolute w-[68px] h-[68px] top-[18px] left-[21px]"
                    alt="Mask group"
                    src="mask-group-4.png"
                  />
                  <div className="top-[30px] absolute left-[98px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                    Caleb
                  </div>
                  <div className="absolute top-[54px] left-[99px] [font-family:'Inter-Italic',Helvetica] font-normal italic text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    that’s a great deal
                  </div>
                  <div className="top-[22px] left-[464px] absolute [font-family:'Inter-ExtraLight',Helvetica] font-extralight text-black text-sm tracking-[0] leading-[normal]">
                    16/03/2024
                  </div>
                  <MenuMoreHorizontal />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute w-[600px] h-[165px] top-0 left-0">
            <div className="relative w-[598px] h-[165px] bg-[#f0f6ff]">
              <div className="absolute top-[34px] left-5 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-2xl tracking-[0] leading-[normal]">
                Messages
              </div>
              <div className="absolute w-[556px] h-[47px] top-[84px] left-[23px]">
                <div className="relative w-[554px] h-[47px] bg-white rounded-[43px]">
                  <img className="absolute w-[18px] h-[18px] top-3.5 left-3" alt="Search icon" src="search-icon.png" />
                  <input
                    className="absolute top-[9px] left-[42px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#6b6868] text-2xl tracking-[0] leading-[normal] [background:transparent] border-[none] p-0"
                    placeholder="Search Direct Messages"
                    type="number"
                  />
                </div>
              </div>
              <img
                className="absolute w-[22px] h-[22px] top-[41px] left-[536px]"
                alt="New chat icon"
                src="new-chat-icon.png"
              />
              <img
                className="absolute w-[21px] h-[22px] top-[41px] left-[497px]"
                alt="Settings icon"
                src="settings-icon.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-[357px] h-[1024px] top-0 left-0 bg-white">
          <div className="absolute w-[318px] h-[68px] top-[133px] left-[30px]">
            <div className="relative w-[316px] h-[68px] rounded-xl">
              <div className="absolute w-[316px] h-[68px] top-0 left-0 bg-white rounded-xl" />
              <div className="top-[25px] left-[61px] [font-family:'Inter-Regular',Helvetica] font-normal text-base absolute text-black tracking-[0] leading-[normal] whitespace-nowrap">
                Home
              </div>
              <div className="absolute w-8 h-9 top-[11px] left-4 bg-white rounded-[3px]">
                <img className="absolute w-8 h-[31px] top-0.5 left-0" alt="Vector" src="image.svg" />
              </div>
            </div>
          </div>
          <div className="absolute w-[311px] h-[68px] top-[300px] left-[30px]">
            <div className="relative w-[309px] h-[68px] bg-white rounded-xl shadow-[0px_4px_8px_2px_#0000001a]">
              <div className="absolute w-[46px] h-[46px] top-[11px] left-[13px] rounded-xl">
                <div className="absolute w-[46px] h-[46px] top-0 left-0 bg-white rounded-xl">
                  <img className="absolute w-[39px] h-[39px] top-[3px] left-1" alt="Vector" src="vector-2.svg" />
                </div>
                <div className="absolute w-[18px] h-4 top-[7px] left-[26px]">
                  <div className="relative w-4 h-4 bg-[#166cfc] rounded-[7.91px]">
                    <div className="absolute top-0.5 left-px [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                      23
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-[21px] left-[71px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#255dd4] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Message
              </div>
              <div className="absolute w-2.5 h-11 top-3 left-0 bg-[#255dd4] rounded-[2px_4px_4px_2px]" />
            </div>
          </div>
          <div className="absolute w-[311px] h-[68px] top-[220px] left-[30px]">
            <div className="relative w-[309px] h-[68px] bg-white rounded-xl">
              <div className="absolute w-[46px] h-[46px] top-[11px] left-[13px] rounded-xl">
                <div className="absolute w-[46px] h-[46px] top-0 left-0 bg-white rounded-xl">
                  <img className="absolute w-[34px] h-[39px] top-[3px] left-1.5" alt="Vector" src="vector-3.svg" />
                </div>
                <div className="absolute w-[18px] h-4 top-[7px] left-[26px]">
                  <div className="relative w-4 h-4 bg-[#166cfc] rounded-[7.91px]">
                    <div className="absolute top-0.5 left-px [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                      99
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-5 left-[71px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
                Notification
              </div>
            </div>
          </div>
          <div className="absolute w-[318px] h-[68px] top-[380px] left-[30px]">
            <div className="absolute w-[318px] h-[68px] top-0 left-0">
              <div className="relative w-[316px] h-[68px] bg-white rounded-xl">
                <div className="absolute w-[101px] top-[21px] left-[71px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                  Category
                </div>
              </div>
            </div>
            <div className="absolute w-[45px] h-[46px] top-[9px] left-[13px] bg-white rounded-xl">
              <img className="absolute w-9 h-[37px] top-1 left-1" alt="Iconly light" src="category.png" />
            </div>
          </div>
          <div className="absolute w-[318px] h-[68px] top-[460px] left-[30px]">
            <div className="relative w-[316px] h-[68px] bg-white rounded-xl">
              <div className="absolute w-[46px] h-[46px] top-[11px] left-[13px] bg-white rounded-xl">
                <img className="absolute w-10 h-[39px] top-1 left-[3px]" alt="Vector" src="vector-4.svg" />
              </div>
              <div className="absolute w-[70px] top-[21px] left-[71px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                Profile
              </div>
            </div>
          </div>
          <div className="absolute w-[318px] h-[69px] top-[539px] left-[30px]">
            <div className="relative w-[316px] h-[69px] bg-white rounded-xl">
              <div className="absolute w-[46px] h-[46px] top-3 left-[13px] bg-white rounded-xl">
                <img className="absolute w-10 h-[38px] top-[5px] left-[3px]" alt="Vector" src="vector-5.svg" />
              </div>
              <div className="absolute w-[90px] top-[22px] left-[71px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
                Settings
              </div>
            </div>
          </div>
          <img className="absolute w-[134px] h-14 top-5 left-[42px]" alt="Logo" src="logo.png" />
          <ProfileWithDetails
            className="!absolute !left-[30px] !top-[634px]"
            maskGroup="mask-group-12.png"
            vector="vector-6.svg"
          />
        </div>
      </div>
    </div>
  );
};
