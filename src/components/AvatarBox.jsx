import React from 'react'
import Theme from '../Constants/Theme'
import { Instagram } from 'lucide-react'
import IMAGES from '../Constants/Images'

const AvatarBox = ({
    name = "Jenny Watson",
    description = "Hi! beautiful people. I`m an authtor of this blog. Read our post - stay with us"
}) => {
    return (
        <div
            className={`bg-[${Theme.colors.background}] flex flex-col items-center p-4 h-[405px]`}
        >
            {/* Avatar */}
            <div className="w-40 h-40 rounded-full overflow-hidden mb-5">
                <img
                    src={IMAGES.TESTIMONIAL1}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Name */}
            <p className="text-3xl font-bold mb-2" style={{ color: Theme.colors.darkText }}>
                {name}
            </p>

            {/* Description */}
            <p className="text-center text-lg mb-4" style={{ color: Theme.colors.darkText }}>
                {description}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-auto mb-4">
                {/* Facebook */}
                <a href="#" className="hover:scale-110 transition-transform">
                    <svg
                        width="38"
                        height="38"
                        viewBox="0 0 24 24"
                        fill="#1877F2"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.84 3.44 8.85 7.94 9.8v-6.93H7.89v-2.87h2.05v-2.2c0-2.03 1.2-3.15 3.03-3.15.88 0 1.8.16 1.8.16v1.98h-1.01c-.99 0-1.3.62-1.3 1.26v1.51h2.21l-.35 2.87h-1.86V21.8C18.56 20.85 22 16.84 22 12z" />
                    </svg>
                </a>

                {/* Instagram (Lucide) */}
                <a href="#" className="hover:scale-110 transition-transform">
                    <Instagram size={35} color="#E4405F" />
                </a>

                {/* Pinterest */}
                <a href="#" className="hover:scale-110 transition-transform">
                    <svg
                        width="35"
                        height="35"
                        viewBox="0 0 24 24"
                        fill="#BD081C"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.05 3.17 9.37 7.61 11.05-.11-.94-.21-2.39.04-3.41.23-.97 1.48-6.2 1.48-6.2s-.38-.75-.38-1.86c0-1.74 1.01-3.04 2.27-3.04 1.07 0 1.58.8 1.58 1.75 0 1.07-.68 2.66-1.03 4.14-.29 1.23.61 2.23 1.81 2.23 2.17 0 3.64-2.29 3.64-5.58 0-2.91-2.08-4.95-5.04-4.95-3.44 0-5.45 2.57-5.45 5.22 0 1.04.4 2.16.9 2.77.1.12.12.22.09.34-.1.38-.32 1.23-.36 1.4-.06.23-.2.28-.47.17-1.76-.82-2.86-3.41-2.86-5.49 0-4.48 3.26-8.61 9.42-8.61 4.95 0 8.8 3.53 8.8 8.23 0 4.91-3.1 8.86-7.41 8.86-1.45 0-2.81-.75-3.27-1.63 0 0-.78 3.07-.95 3.66-.29 1.09-1.05 2.45-1.57 3.27C9.91 23.84 10.95 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" />
                    </svg>
                </a>
            </div>
        </div>
    )
}

export default AvatarBox
