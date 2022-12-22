import Layout from "../../components/Layout";
import { getProviders, signIn, useSession } from "next-auth/react";
import { InferGetServerSidePropsType } from "next";
import { FaGoogle } from "react-icons/fa";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { CtxOrReq } from "next-auth/client/_utils";

const SignIn = ({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data: session, status } = useSession();
  console.log(status);

  return (
    <Layout title="로그인">
      {session ? (
        <div>
          <p>Loggedin</p>
        </div>
      ) : (
        <div className="flex items-center justify-center my-20">
          <div className="card w-96 bg-base-100 shadow-xl border-t-2 border">
            <div className="card-body items-center text-center">
              <h2 className="card-title">로그인</h2>
              <div className="card-actions">
                {providers
                  ? Object.values(providers).map((provider, i) => {
                      if (provider.id !== "email") {
                        return (
                          <div key={provider.name}>
                            <button
                              onClick={() => signIn(provider.id)}
                              className="btn flex flex-row gap-3"
                            >
                              <FaGoogle />
                              <p>Google</p>
                            </button>
                          </div>
                        );
                      }
                    })
                  : ""}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export const getServerSideProps = async (context: CtxOrReq | undefined) => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};

export default SignIn;
