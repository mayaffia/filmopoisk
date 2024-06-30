
import React from "react";

interface ReqStarProps {
    className?: string;
}

export const ReqStar : React.FC<ReqStarProps> = ({ className }) => {
    return (
        <svg className={`${className}`} width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1.83691 5.05078L1.91211 3.30078L0.462891 4.2168L-0.00195312 3.49219L1.58398 2.65137L-0.00195312 1.81738L0.462891 1.09277L1.91211 2.00879L1.83691 0.258789H2.77344L2.69824 2.00195L4.14062 1.09277L4.60547 1.81738L3.01953 2.65137L4.60547 3.49219L4.14062 4.2168L2.69824 3.30762L2.77344 5.05078H1.83691Z"
                fill="#F04075"/>
        </svg>
    );
}