"use client";

import { FormEvent, createRef, useState } from "react";
import Image from "next/image";
import { icon } from "@fortawesome/fontawesome-svg-core";

type keyValue = {
  key: string;
  value: string;
};

export default function Home() {
  const [file, setfile] = useState("undef");
  const [ver, setver] = useState("");


  const [count, setCount] = useState(0);
  const [key, setKey] = useState("");

  var emptykeys: string[] = [];
  const [keys, setkeys] = useState(emptykeys);
  var kv: {[k: string]: any} = {};
  const fileInput = createRef<HTMLInputElement>();

  function keyValueReduce(key: string) {
    return (
        <div className="sm:col-span-3" key={key}>
          <label htmlFor={key} className="form-text">
            {key}
          </label>
          <div className="mt-2">
            <input
              type="text"
              name={key}
              id={key}
              onChange={(e) => {kv[key] = e.currentTarget.value}}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
    );
  }

  return (
    <main className="flex min-h-screen min-w-full flex-col items-center justify-between p-16">
      <div className="m-8 flex min-w-full flex-row justify-between">
        <form className="rounded-md bg-slate-700 p-8">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="form-h1">Create Docs</h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <fieldset>
                    <legend className="form-text">Select Template</legend>
                    <div className="mt-6 space-y-6">
                      {[
                        "Doc101",
                        "Doc102A",
                        "Doc102B",
                        "Doc103A",
                        "Doc103B",
                        "Doc103C",
                        "Doc105",
                      ].map((v, i) => {
                        return (
                          <div className="flex items-center gap-x-3" key={i}>
                            <input
                              id={v}
                              name="template"
                              type="radio"
                              className="radio-button"
                              onClick={(e) => {
                                setfile(v);
                              }}
                            />
                            <label htmlFor={v} className="radio-text">
                              {v}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </fieldset>
                </div>
                <div className="col-span-full">
                  <label htmlFor="csv-file" className="form-text">
                    Upload CSV
                  </label>
                  <button
                    className="button-primary my-1"
                    disabled={file == "undef"}
                  >
                    {file == "undef"
                      ? "Select a template"
                      : "Download " + file + " example"}
                  </button>
                </div>
                <div className="col-span-full">
                  <label htmlFor="cover-photo" className="form-text">
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-500/25 px-6 py-10">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label htmlFor="file-upload" className="button-primary">
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            accept=".tsv"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1 dark:text-slate-200">
                          or drag and drop
                        </p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600 dark:text-slate-300">
                        TSV up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>

      <div className="m-8 flex min-w-full flex-row justify-between rounded-md bg-slate-700">
        <form className="w-1/2 p-8">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="form-h1">Verify doc</h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label htmlFor="cover-photo" className="form-text">
                    Upload PDF
                  </label>
                  <input
                    className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
                    aria-describedby="file_input_help"
                    id="file_input"
                    type="file"
                    accept=".pdf"
                  />
                  <p
                    className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    id="file_input_help"
                  >
                    PDF (MAX. 2MB).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
        <div className="grow p-8">
          <h1>Verification Result</h1>
          <div className="flex h-full items-center justify-center">
            <div className="h-1/2 w-96 border-2 border-white"></div>
          </div>
        </div>
      </div>

      <div className="m-8 flex min-w-full flex-row justify-between rounded-md bg-slate-700">
        <form className="w-1/2 p-8">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="form-h1">Add doc</h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label htmlFor="cover-photo" className="form-text">
                    Upload PDF
                  </label>
                  <input
                    className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
                    aria-describedby="file_input_help"
                    id="file_input"
                    type="file"
                    accept=".pdf"
                    ref={fileInput}
                  />
                  <p
                    className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                    id="file_input_help"
                  >
                    PDF (MAX. 2MB).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
        <div className="grow p-8">
          <h1>Verification Details</h1>
          <form className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6" onSubmit={(e) => {
            e.preventDefault();
            console.log(kv);
            if (fileInput.current?.files != null) {
              var data = new FormData();
              data.append("pdf_file", fileInput.current.files[0])
              Object.entries(kv).forEach(([k, v]) => {
                data.append(k, v)
              })
              console.log(data)
            };
            
          }}>
            {keys.map((x) => keyValueReduce(x))}
            <button className="sm:col-span-3 button-primary" type="submit">Submit KV</button>
          </form>
          <form className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6" onSubmit={(e) => {
            e.preventDefault();
            setkeys([...keys, (key.charAt(0).toUpperCase() + key.slice(1))])
            // setCount(count + 1);
          }}>
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="form-text">
                Add Key
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="key"
                  id="key"
                  onChange={(e) => {setKey(e.currentTarget.value)}}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <button className="sm:col-span-3 button-primary" type="submit">Add KV</button>
          </form>
        </div>
      </div>
    </main>
  );
}
