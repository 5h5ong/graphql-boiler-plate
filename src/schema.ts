import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import { makeExecutableSchema } from "graphql-tools";
import * as path from "path";

console.log(`Current Mode = [ ${process.env.NODE_ENV} ]`);
const allTypes = fileLoader(path.join(__dirname, "/graphql/**/*.graphql"));
/*
  resolver 파일의 확장자가 배포하려고 빌드할 때 js로 변경되는 걸 예외처리하기
  ---
  production = 빌드된 상태(배포)
  dev = 개발 중인 상태 
*/
const allResolvers = fileLoader(
  path.join(
    __dirname,
    process.env.NODE_ENV === "production"
      ? "/graphql/**/*.js"
      : "/graphql/**/*.ts"
  )
);
const schema = makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  resolvers: mergeResolvers(allResolvers)
});
export default schema;
