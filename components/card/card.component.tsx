import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export type MetaDataItem = {
    title: string;
    date: string;
    topic: string;
    id: number;
}

type BlogCardProps = {
    data: MetaDataItem;
}

const BlogCard = ({data}: BlogCardProps) => {
    const { title, date, topic} = data;

    return(
        <article>
            <Link href='./'>
                <div>
                    <div>{title}</div>
                    <div>
                        <div>
                            <Image 
                                src={`/static/icon-topic/${topic}-topic.png`}
                                alt={`${topic}`}
                                width={20}
                                height={20}
                            />
                            {topic}
                        </div>
                        <div>{date}</div>
                    </div>
                </div>
            </Link>
        </article>
    )

}

export default BlogCard;