import Image from 'next/image';
import title from '../../assets/title.png';
import connect from '../../assets/logo-connect-preta.png';
import advec from '../../assets/logo-advec-preta.png';
import interligados from '../../assets/interligados.png';

export default () => {
  return(
    <div className="w-full min-h-screen py-10 flex flex-col items-center bg-[url(/bg-luau.png)] bg-center bg-cover bg-fixed">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-5">
          <Image src={connect} alt="" className="w-[80px]"/>
          <Image src={interligados} alt="" className="w-[55px]"/>
        </div>

        <Image src={title} alt="" className="w-[300px] mt-5"/>
      </div>

      <div className="mt-14 rounded-2xl overflow-hidden">
        <video src='/VIDEO.mp4' className="w-[500px] px-5 rounded-2xl" typeof="video/mp4" controls/>
      </div>

      <Image src={advec} alt="" className="w-[150px] mt-5"/>
    </div>
  );
}