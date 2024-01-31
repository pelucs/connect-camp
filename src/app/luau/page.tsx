import Image from 'next/image';
import title from '../../assets/title.png';
import connect from '../../assets/logo-connect.png';

export default () => {
  return(
    <div className="w-full h-screen py-20 flex flex-col items-center bg-[url(/bg-luau.png)] bg-center bg-cover">
      <div>
        <div>
          <Image src={connect} alt="" className=""/>
        </div>

        <Image src={title} alt="" className="w-[300px]"/>
      </div>
    </div>
  );
}