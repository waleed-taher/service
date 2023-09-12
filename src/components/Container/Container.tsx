export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className=" max-w-screen-2xl sm:mx-4 md:mx-8 lg:mx-12 py-4 mx-2">
      {children}
    </div>
  );
}
