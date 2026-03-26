export default async function UserProfile ({params}: {
   params: Promise<{ id: string }>;
 }) {
    const { id } = await params;
        return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr/>
            <p className="text-4xl">profile page {""}<span className="p-2 ml-2 rounded bg-orange-500 text-black  ">{id}</span> 
            </p> 
        </div>
     ) 
} 



// export default async function UserProfile({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   // In Next.js 15+, params is a Promise that must be awaited
//   const { id } = await params;

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//       <h1 className="text-2xl font-bold">Profile</h1>
//       <hr className="w-full my-4" />
//       <p className="text-4xl">
//         profile page{" "}
//         <span className="p-2 ml-2 rounded bg-orange-500 text-black">
//           {id}
//         </span>
//       </p>
//     </div>
//   );
// }