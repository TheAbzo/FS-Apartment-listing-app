const Page = ({ params }: { params: { id: string } }) => {
    return <div>Apartment details for id: {params.id}</div>;
  };
  
  export default Page;