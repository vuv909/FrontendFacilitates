"use client";
import { InputTextarea } from "primereact/inputtextarea";
import { useState } from "react";
import { Rating, RatingChangeEvent } from "primereact/rating";
import { Pagination, PaginationProps } from "antd";

export default function CommentComponent() {
  const [value, setValue] = useState("");
  const [star, setStar] = useState<number | null>(null); // Ensure star is nullable
  const [starVoted, setStarVoted] = useState<number | null>(2); // Ensure star is nullable
  const onChangePage: PaginationProps["onChange"] = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };
  return (
    <div>
      <div className="flex gap-5 items-center mx-auto">
        <img
          src="https://picsum.photos/200/300"
          alt=""
          className="h-20 w-20 rounded-full"
        />
        <div className="flex flex-col gap-3">
          <Rating
            value={!star ? 0 : star}
            onChange={(e: RatingChangeEvent) =>
              setStar(e.value !== undefined ? e.value : null)
            }
            className="shadow-none"
          />
          <div className="relative">
            <InputTextarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              rows={5}
              cols={100}
              placeholder="Nhập đánh giá của bạn ở đây ..."
              className="border border-solid border-gray-300 shadow-none w-full"
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              width="20"
              viewBox="0 0 512 512"
              className="bg-blue-400 hover:bg-blue-200 absolute right-0 bottom-2 cursor-pointer"
            >
              <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div>
          <div>
            <p>5 đánh giá</p>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex gap-5 items-center">
            <div>
              <img
                src="https://picsum.photos/200/300"
                alt=""
                className="w-14 h-14 rounded-full"
              />
            </div>
            <div className="border border-solid border-gray-300 p-4 rounded-xl">
              <div className="flex gap-5">
                <div>
                  <p className="font-bold">Minh</p>
                </div>
                <div>
                  <p className="text-gray-500 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="14"
                      viewBox="0 0 448 512"
                    >
                      <path d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z" />
                    </svg>
                    14h30
                  </p>
                </div>
              </div>
              <div className="my-2">
                <Rating
                  disabled
                  cancelIcon={<></>}
                  value={!starVoted ? 0 : starVoted}
                  onChange={(e: RatingChangeEvent) =>
                    setStarVoted(e.value !== undefined ? e.value : null)
                  }
                  className="shadow-none"
                />
              </div>
              <div>
                <p>Wow very good</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center my-16">
        <Pagination
          defaultCurrent={6}
          total={500}
          onChange={onChangePage}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}
