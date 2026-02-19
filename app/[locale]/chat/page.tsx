
'use client';
import * as React from 'react';

import OrbitIcons from './orbit';
import { PencilIcon, AvatarIcon, EmotionIcon, EmotionIcon2 } from './pencil';
import Avatar from '@mui/material/Avatar';

export default function ChatPage() {



    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", marginTop: 20 }} >
                <OrbitIcons icons={[
                    {
                        id: 'icon1', orbit: 1, component: <PencilIcon />,
                    },
                    {
                        id: 'icon2', orbit: 1, component: <AvatarIcon />,
                    },
                    {
                        id: 'icon3', orbit: 2, component: <EmotionIcon />,
                    },
                    {
                        id: 'icon4', orbit: 2, component: <AvatarIcon />,
                    },
                    {
                        id: 'icon5', orbit: 2, component: <PencilIcon />,
                    },
                    {
                        id: 'icon6', orbit: 2, component: <EmotionIcon2 />,
                    },
                ]}


                    centerIcon={<Avatar alt="Muzzy" src="/avatar.png" sx={{ width: 60, height: 60 }} />}

                    radius1={80}
                    radius2={120}
                    rotateIcons={false}
                    autoRotate={true}
                    orbitDuration1={50}
                    orbitDuration2={120}
                />

            </div>
        </>
    );
}