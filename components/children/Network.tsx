import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { SiInstagram, SiWikidata } from 'react-icons/si'
import { IoLogoTwitter } from 'react-icons/io'
import { FaFacebookF, FaImdb, FaTiktok, FaYoutube } from 'react-icons/fa'
import { ImLink } from 'react-icons/im'

interface INetworkProps {
   details: {
      homepage: string | null
   }
   external: {
      facebook_id: string | null
      imdb_id: string | null
      instagram_id: string | null
      twitter_id: string | null
      wikidata_id: string | null
      youtube_id: string | null
      tiktok_id: string | null
   }
}

const Network: React.FC<INetworkProps> = ({ external, details }) => {

   return (
      <div className="">
         <ul className="flex items-center gap-2">
            {
               external?.youtube_id ?
                  <li className='bg-white/5 rounded-lg'>
                     <Tooltip title="instagram">
                        <IconButton>
                           <a className="rounded-full text-[25px] max-sm:text-[20px] text-gray-500 hover:text-white ease-in duration-100" href={`https://www.youtube.com/${external.youtube_id}`}><FaTiktok /></a>
                        </IconButton>
                     </Tooltip>
                  </li>
                  : null
            }
            {
               external?.tiktok_id ?
                  <li className='bg-white/5 rounded-lg'>
                     <Tooltip title="instagram">
                        <IconButton>
                           <a className="rounded-full text-[25px] max-sm:text-[20px] text-gray-500 hover:text-white ease-in duration-100" href={`https://www.tiktok.com/${external.tiktok_id}`}><FaTiktok /></a>
                        </IconButton>
                     </Tooltip>
                  </li>
                  : null
            }
            {
               external?.instagram_id ?
                  <li className='bg-white/5 rounded-lg'>
                     <Tooltip title="instagram">
                        <IconButton>
                           <a className="rounded-full text-[25px] max-sm:text-[20px] text-gray-500 hover:text-white ease-in duration-100" href={`https://www.instagram.com/${external.instagram_id}`}><SiInstagram /></a>
                        </IconButton>
                     </Tooltip>
                  </li>
                  : null
            }
            {
               external?.wikidata_id ?
                  <li className='bg-white/5 rounded-lg'>
                     <Tooltip title="wikidata">
                        <IconButton>
                           <a className="rounded-full text-[25px] max-sm:text-[20px] text-gray-500 hover:text-white ease-in duration-100" href={`https://www.wikidata.org/wiki/${external.wikidata_id}`}><SiWikidata /></a>
                        </IconButton>
                     </Tooltip>
                  </li>
                  : null
            }
            {
               external?.twitter_id ?
                  <li className='bg-white/5 rounded-lg'>
                     <Tooltip title="twitter">
                        <IconButton>
                           <a className="rounded-full text-[25px] max-sm:text-[20px] text-gray-500 hover:text-white ease-in duration-100" href={`https://twitter.com/${external.twitter_id}`}><IoLogoTwitter /></a>
                        </IconButton>
                     </Tooltip>
                  </li>
                  : null
            }
            {
               external?.facebook_id ?
                  <li className='bg-white/5 rounded-lg'>
                     <Tooltip title="facebook">
                        <IconButton>
                           <a className="rounded-full text-[25px] max-sm:text-[20px] text-gray-500 hover:text-white ease-in duration-100" href={`https://www.facebook.com/${external.facebook_id}`}><FaFacebookF /></a>
                        </IconButton>
                     </Tooltip>
                  </li>
                  : null
            }
            {
               external?.imdb_id ?
                  <li className='bg-white/5 rounded-lg'>
                     <Tooltip title="IMDb">
                        <IconButton>
                           <a className="rounded-full text-[25px] max-sm:text-[20px] text-gray-500 hover:text-white ease-in duration-100" href={`https://www.imdb.com/title/${external.imdb_id}`}><FaImdb /></a>
                        </IconButton>
                     </Tooltip>
                  </li>
                  : null
            }
            {
               details?.homepage ?
                  <li className='border-l border-gray-500 pl-1'>
                     <Tooltip title="Посетить Домашнюю страницу">
                        <IconButton>
                           <a className="text-[25px] max-sm:text-[20px] text-gray-500 hover:text-white ease-in duration-100 bg-white/5 rounded-lg p-2" href={`${details.homepage}`}><ImLink /></a>
                        </IconButton>
                     </Tooltip>
                  </li>
                  : null
            }
         </ul>
      </div>
   )
};

export default Network;
