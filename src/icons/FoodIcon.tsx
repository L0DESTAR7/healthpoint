import { styled } from "nativewind";
import { Dimensions } from "react-native";
import { Path, Svg } from "react-native-svg";
import getFormFactor from "../util/getFormFactor";
import { IconProps } from "../types/IconProps";

const StyledPath = styled(Path, { classProps: ["fill", "stroke"] })

function FoodSVG({ fill, ...props }: any) {

  const formFactor = getFormFactor();
  console.log("[FoodIcon.tsx]: formFactor = " + formFactor);

  return (
    <Svg
      viewBox="0 0 40 35"
      width={formFactor === "lg" ? 48 : (formFactor === "md" ? 28 : 19)}
      height={formFactor === "lg" ? 36 : (formFactor === "md" ? 24 : 16)}>
      <StyledPath fill={fill} fill-rule="evenodd" d="M2.148 9.673C.966 8.592.16 6.837.002 4.003a1.004 1.004 0 0 1 1.029-1.05c1.764.031 3.115.152 4.147.456C5.62 2.263 6.503 1.18 7.824.191a.962.962 0 0 1 1.151 0c1.333.997 2.219 2.09 2.657 3.247 1.063-.358 2.425-.462 4.14-.486a1.005 1.005 0 0 1 1.026 1.05c-.158 2.835-.965 4.59-2.146 5.671.577.43.911 1.151.788 1.931a125.479 125.479 0 0 1-1.588 8.195H7.346v2.106h6.01A129.479 129.479 0 0 1 10.24 32.66a1.925 1.925 0 0 1-3.68 0 124.05 124.05 0 0 1-1.408-4.434h2.194v-2.107h-2.8a135.178 135.178 0 0 1-2.277-9.48h4.024v-2.106H1.862a112.756 112.756 0 0 1-.503-2.928 2.004 2.004 0 0 1 .789-1.93Zm7.514-5.489.72 1.897 1.921-.647c.53-.178 1.248-.284 2.27-.338-.314 2.036-1.067 2.895-1.754 3.34-.981.634-2.41.827-4.388.829h-.063c-1.976-.002-3.406-.195-4.387-.83-.687-.443-1.44-1.302-1.753-3.333 1.055.058 1.805.166 2.354.328l1.863.55.699-1.812c.2-.521.589-1.106 1.256-1.722.674.623 1.063 1.213 1.262 1.738ZM30.211 5.796c-2.078 2.078-2.28 4.98-1.113 7.711C34.212 10.16 40 14.3 40 20.852c0 5.817-5.188 10.533-11.587 10.533-6.4 0-11.587-4.716-11.587-10.533 0-6.102 5.019-10.112 9.839-7.931-.823-2.95-.397-6.16 2.056-8.614l1.49 1.49Zm6.597 17.418a1.053 1.053 0 0 0-2.044-.511 4.663 4.663 0 0 1-3.447 3.447 1.053 1.053 0 0 0 .511 2.044 6.769 6.769 0 0 0 4.98-4.98Z" clip-rule="evenodd" />
      <StyledPath fill={fill} d="M30.52 10.318c3.16 0 5.266-2.106 5.266-5.266-3.16 0-5.267 2.106-5.267 5.266Z" />
    </Svg>
  )
}

export default function FoodIcon({ isActive }: IconProps) {
  return (
    <>
      <FoodSVG fill={
        isActive ?
          "dark:fill-spring-950"
          :
          "fill-spring-800 dark:fill-spring-200"
      }>
      </FoodSVG>
    </>
  )
}
