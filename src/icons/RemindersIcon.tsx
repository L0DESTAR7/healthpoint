import { styled } from "nativewind";
import { Path, Svg } from "react-native-svg";
import getFormFactor from "../util/getFormFactor";
import { IconProps } from "../types/IconProps";

const StyledPath = styled(Path, { classProps: ["fill", "stroke"] })

function RemindersSVG({ fill, ...props }: any) {

  const formFactor = getFormFactor();
  console.log("[RemindersIcon.tsx]: formFactor = " + formFactor + ", fill = " + fill);

  return (
    <Svg
      viewBox="0 0 22 24"
      width={formFactor === "lg" ? 40 : (formFactor === "md" ? 20 : 15)}
      height={formFactor === "lg" ? 34 : (formFactor === "md" ? 20 : 16)}>
      <StyledPath fill={fill} d="M21.349 6.121a.854.854 0 0 1-.663.058.875.875 0 0 1-.51-.437 10.381 10.381 0 0 0-3.639-4.1.879.879 0 0 1-.385-.556.91.91 0 0 1 .113-.671.882.882 0 0 1 .544-.393.853.853 0 0 1 .657.115 12.292 12.292 0 0 1 4.255 4.787c.106.21.126.453.056.677a.884.884 0 0 1-.428.52Zm-20.48.1c.16 0 .316-.044.453-.13a.882.882 0 0 0 .32-.35 10.381 10.381 0 0 1 3.64-4.1.889.889 0 0 0 .384-.555.905.905 0 0 0-.113-.671.871.871 0 0 0-.544-.393.855.855 0 0 0-.657.115A12.292 12.292 0 0 0 .098 4.924a.904.904 0 0 0 .029.87.856.856 0 0 0 .743.427Zm20.242 11.547a1.808 1.808 0 0 1 .006 1.78 1.76 1.76 0 0 1-.637.653 1.71 1.71 0 0 1-.872.24h-4.437a4.461 4.461 0 0 1-1.51 2.556A4.295 4.295 0 0 1 10.908 24a4.295 4.295 0 0 1-2.754-1.003 4.461 4.461 0 0 1-1.51-2.556H2.206c-.305 0-.606-.084-.87-.24a1.76 1.76 0 0 1-.636-.654 1.807 1.807 0 0 1 .007-1.78c.98-1.726 1.5-4.183 1.5-7.102 0-2.357.916-4.618 2.548-6.284a8.61 8.61 0 0 1 6.153-2.603A8.61 8.61 0 0 1 17.06 4.38a8.985 8.985 0 0 1 2.549 6.284c0 2.918.52 5.374 1.502 7.103Zm-7.743 2.673h-4.92c.18.519.513.968.953 1.286.441.318.967.489 1.507.489.539 0 1.065-.17 1.506-.489a2.66 2.66 0 0 0 .954-1.286Zm6.24-1.778c-1.157-2.03-1.74-4.72-1.74-7.998a7.187 7.187 0 0 0-2.038-5.027 6.888 6.888 0 0 0-4.922-2.083 6.888 6.888 0 0 0-4.923 2.083 7.187 7.187 0 0 0-2.038 5.027c0 3.28-.585 5.97-1.74 7.998h17.401Z" />
    </Svg>
  )
}

export default function RemindersIcon({ isActive }: IconProps) {
  return (
    <>
      <RemindersSVG fill={
        isActive ?
          "dark:fill-spring-950"
          :
          "fill-spring-800 dark:fill-spring-200"
      }>
      </RemindersSVG>
    </>
  )
}

