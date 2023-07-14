const _ = require("lodash");
const { sampleData } = require("../data/sampleData");

const { filter, map, orderBy } = _;

class User {
  constructor(attributes) {
    this.id = attributes.id;
  }

  select(entity) {
    this.entity = entity;
    return this;
  }

  attributes(attrs) {
    this.attrs = attrs;
    return this;
  }

  where(conditions) {
    this.conditions = conditions;
    return this;
  }
  order(sortBy) {
    this.sortBy = sortBy;
    return this;
  }

  findAll() {
    const result = filter(sampleData[this.entity], this.conditions);
    const mappedResult = map(result, (item) => _.pick(item, this.attrs));

    if (this.sortBy) {
      return orderBy(mappedResult, this.sortBy);
    }

    return mappedResult;
  }

  findOne() {
    const result = _.find(sampleData[this.entity], this.conditions);

    if (!result) {
      return null;
    }

    return _.pick(result, this.attrs);
  }
}
var user = new User({
  id: 123,
});

console.log(
  user
    .select("apps")
    .attributes(["id", "title"])
    .where({ published: true })
    .order(["title"])
    .findAll()
);

console.log(
  user
    .select("organizations")
    .attributes(["name"])
    .where({ suspended: false })
    .findOne()
);
