import React from "react";
import Image from 'next/image';
import Link from 'next/link';

type MemberProps = {
  id: number;
  name: string;
  socialId: string;
  link: string;
};

const Member = ({ id, name, socialId, link }: MemberProps): JSX.Element => {
  return (
    <div>
      <Image 
        width={200}
        height={200}
        src={`/assets/images/team/worker.svg`}
        alt={`Avatar for member team ${name}`}
      />
      <div className="text-2xl xl:text-3xl">{name}</div>
      <div className="text-xl">
        <Link href={link}>
          <a target="_blank">{socialId}</a>
        </Link>
      </div>
    </div>
  );
};

export default Member;
