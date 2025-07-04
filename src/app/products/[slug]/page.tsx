import  {prisma}  from "@/lib/db";
export default async function product({params}: { params: { slug: string } }){
    const product = await prisma.product.findUnique(
        {where:{
            slug: params.slug,
        }}
    );
    return(
        <div className="flex justify-center items-center mt-7">
            <h1 className="text-2xl">{product?.title}</h1>
            <h2>{product?.content}</h2>
        </div>
    )
}