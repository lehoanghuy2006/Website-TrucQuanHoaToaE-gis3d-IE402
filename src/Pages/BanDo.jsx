  import React from "react";
  import { Layout } from "../Layout/Layout";


  export const BanDo = () => {
    return (
      <Layout>
        <div className="p-0 ">
          <div className="relative m-0">
            <iframe
              className="w-screen h-screen m-0 border-0"
              title="Bản đồ"
              src="https://lehoanghuy2006.github.io/gid3d-ie402-uit/"
            > 
              <p>Your browser does not support iframes.</p>
            </iframe>

          </div>
        </div>
      </Layout>
    );
  };
