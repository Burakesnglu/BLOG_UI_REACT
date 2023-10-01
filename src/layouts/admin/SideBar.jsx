import React from 'react'

import { Navigation } from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { useNavigate } from "react-router-dom";

export default function SideBar() {
    const navigate = useNavigate();
    return (
        <>
            <Navigation
                // you can use your own router's api to get pathname
                activeItemId="/admin"
                onSelect={({ itemId }) => {
                    // maybe push to the route
                    navigate(itemId)
                }}
                items={[
                    {
                        title: 'Dashboard',
                        itemId: '/admin',
                        elemBefore: () => '',
                    },
                    {
                        title: 'Blog',
                        itemId: '/admin/blog',
                        elemBefore: () => '',
                    },
                    {
                        title: 'Tag',
                        itemId: '/admin/tag',
                        elemBefore: () => '',
                    },
                    {
                        title: 'Management',
                        itemId: '/management',
                        elemBefore: () => '',
                        subNav: [
                            {
                                title: 'Projects',
                                itemId: '/management/projects',
                            },
                            {
                                title: 'Members',
                                itemId: '/management/members',
                            },
                        ],
                    }
                ]}
            />
        </>
    )
}
