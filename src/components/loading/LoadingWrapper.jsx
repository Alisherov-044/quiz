import Loading from "./Loading";

export default function LoadingWrapper({ loading, children }) {
  return <>{loading ? <Loading /> : children}</>;
}
