import OverlappingHeadingStyle from "./OverlappingHeading.module.css";
export default function OverlappingHeading({downLayerContent,upperLayerContent,spanUpperLyer}) {
  return (
      <div className={OverlappingHeadingStyle.down}>
        {downLayerContent}
        <div className={OverlappingHeadingStyle.up}>
          {upperLayerContent}<span className={OverlappingHeadingStyle.spanUpperDeisgin}>{spanUpperLyer}</span></div>
      </div>
  );
}
