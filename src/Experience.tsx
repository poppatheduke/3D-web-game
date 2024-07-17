import { Physics } from "@react-three/rapier";
import useGame from "./stores/useGame";
import Lights from "./components/Lights";
import { Level, Player, Effects } from "./components";

export default function Experience() {
  const blocksCount = useGame((state) => state.blocksCount);
  const blocksSeed = useGame((state) => state.blocksSeed);

  return (
    <>
      <color args={["#252731"]} attach="background" />
      <Physics>
        <Lights />
        <Level count={blocksCount} seed={blocksSeed} />
        <Player />
      </Physics>
      <Effects />
    </>
  );
}
