import Image from "next/image";

const AllBooksPage = async () => {
    const res = await fetch('http://localhost:3000/data.json')
    const books = await res.json();
    return (
        <div>
            <Image
                src={books.image_url}
                alt={books.title}
                width={150}
                height={200}
                className='rounded-lg mb-3 object-cover'
            />
            <p>{books.title}</p>
        </div>
    );
};

export default AllBooksPage;