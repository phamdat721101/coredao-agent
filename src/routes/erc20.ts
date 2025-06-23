import { FastifyInstance } from "fastify";
// import { deployErc20, transferErc20 } from "../utils/erc20";

export async function erc20Routes(server: FastifyInstance) {
  server.post("/erc20/deploy", async (request, reply) => {
    reply.send(
      "This endpoint is deprecated. Please use /erc20/deploy instead.",
    );
    // const { name, symbol, initialSupply } = request.body as any;
    // try {
    //   const contractAddress = await deployErc20(name, symbol, initialSupply);
    //   return { contractAddress };
    // } catch (err) {
    //   reply.status(500).send({ error: err.message });
    // }
  });

  server.post("/erc20/transfer", async (request, reply) => {
    reply.send(
      "This endpoint is deprecated. Please use /erc20/transfer instead.",
    );
    // const { contractAddress, to, amount } = request.body as any;
    // try {
    //   const txHash = await transferErc20(contractAddress, to, amount);
    //   return { txHash };
    // } catch (err) {
    //   reply.status(500).send({ error: err.message });
    // }
  });
}
